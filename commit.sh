#!/bin/bash

# 定义远程仓库名称，默认为 origin
REMOTE_NAME="origin"
# 定义要推送的分支名称，默认为 master
BRANCH_NAME="main"

# 检查当前目录是否是一个 Git 仓库
if ! git rev-parse --git-dir >/dev/null 2>&1; then
    echo "当前目录不是一个 Git 仓库。"
    exit 1
fi

# 检查是否有未提交的更改
# 获取当前时间，格式为 YYYY-MM-DD HH:MM:SS
current_time=$(date "+%Y-%m-%d %H:%M:%S")

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    # 自动生成提交信息
    commit_message="自动提交 $current_time"
    # 执行提交操作
    git add .
    git commit -m "$commit_message"
    echo "代码已提交：$commit_message"
else
    echo "没有未提交的更改。"
fi

# 无限循环，直到推送成功
until git push $REMOTE_NAME $BRANCH_NAME; do
    echo "推送失败，正在重试..."
    sleep 5 # 等待5秒后重试
done

echo "代码已成功推送到远程仓库。"

exit 0
