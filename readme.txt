git常用命令：
（1）git init
初始化一个空的git仓库
（2）git add file1文件或目录路径 file2文件或路径 ...
向git仓库添加文件（放在git仓库的缓存区）
（3）git commit -m '提交的说明信息'
将缓存区的文件提交到git仓库（记录提交信息）
（4）git status
查看仓库的状态
（5）git log
查看仓库的提交记录
（6）git remote add origin 远程git仓库的地址
关联本地仓库与远程服务器中的仓库
（7）git push -u origin 仓库的分支名称
将本地库推送到远程仓库，下一次推送只需输入 git push
