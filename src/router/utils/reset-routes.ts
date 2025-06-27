import type { Router, RouteRecordName, RouteRecordRaw } from "vue-router";

interface TreeConfigOptions {
  // 子属性的名称，默认为'children'
  childProps: string;
}

/**
 * @zh_CN 重置所有路由，如有指定白名单除外
 */
export function resetStaticRoutes(router: Router, routes: RouteRecordRaw[]) {
  // 获取静态路由所有节点包含子节点的 name，并排除不存在 name 字段的路由
  const staticRouteNames = traverseTreeValues<
    RouteRecordRaw,
    RouteRecordName | undefined
  >(routes, (route) => {
    // 这些路由需要指定 name，防止在路由重置时，不能删除没有指定 name 的路由
    if (!route.name) {
      console.warn(
        `The route with the path ${route.path} needs to have the field name specified.`
      );
    }
    return route.name;
  });

  const { getRoutes, hasRoute, removeRoute } = router;
  const allRoutes = getRoutes();
  allRoutes.forEach(({ name }) => {
    // 存在于路由表且非白名单才需要删除
    if (name && !staticRouteNames.includes(name) && hasRoute(name)) {
      removeRoute(name);
    }
  });
}
/**
 * @zh_CN 遍历树形结构，并返回所有节点中指定的值。
 * @param tree 树形结构数组
 * @param getValue 获取节点值的函数
 * @param options 作为子节点数组的可选属性名称。
 * @returns 所有节点中指定的值的数组
 */
export function traverseTreeValues<T, V>(
  tree: T[],
  getValue: (node: T) => V,
  options?: TreeConfigOptions
): V[] {
  const result: V[] = [];
  const { childProps } = options || {
    childProps: "children",
  };

  const dfs = (treeNode: T) => {
    const value = getValue(treeNode);
    result.push(value);
    const children = (treeNode as Record<string, any>)?.[childProps];
    if (!children) {
      return;
    }
    if (children.length > 0) {
      for (const child of children) {
        dfs(child);
      }
    }
  };

  for (const treeNode of tree) {
    dfs(treeNode);
  }
  return result.filter(Boolean);
}
