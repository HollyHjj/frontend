Hello


打开gitbash

查看现有的key
$ ls -al ~/.ssh

生成新的key
ssh-keygen -t rsa -b 4096 -C "hjjcumt@126.com"

查看Public Key
cat ~/.ssh/id_rsa.pub

进入github key配置页面，https://github.com/settings/ssh/new
粘贴到Key里面，并添加

回到gitBash
运行 ssh -T git@github.com，你可能会看到这样的提示：
然后如果你看到 Permission denied (publickey). 就说明你失败了，
请回到第 1 步重来，是的，回到第 1 步重来；
如果你看到 Hi xxx! You've successfully authenticated, 
but GitHub does not provide shell access. 就说明你成功了！

1.输入
git init

删除原有origin
$ git remote rm origin

2.添加origin仓库
HTTPS方式（不推荐）
git remote add origin https://github.com/HollyHjj/frontend.git
SSH方式 （推荐）
git remote add origin git@github.com:HollyHjj/frontend.git

3.view git remote
$ git remote -v

4.pull是将代码从远程仓库同步至本地仓库并merge的命令
$ git pull origin master

5.fetch是单纯将代码从远程仓库同步至本地仓库，并不作merge
git fetch                  取远程仓库至本地，保存版本号至.git/FETCH_HEAD；
git diff origin/master     比较远程origin/master分支与本地差别；
git merge origin           将远程origin/master merge至本地仓库
          

$ git add .

$ git commit -m "add test1.cpp"

$ git log

$ git push origin master

克隆代码：git clone 远程仓库的url
配置邮箱：git config --global user.email
配置用户名：git config --global user.name
从远程仓库下拉代码到本地：git pull
放弃本地代码的修改：git checkout -- <file>
将本地代码添加到缓冲区：git add * .
移除add到缓冲区的文件：git reset HEAD <file>
将本地代码提交到本地仓库：git commit -m"日志文字"
将本地仓库同步到远程仓库：git push origin master
查看日志：git log
查看某个文件的提交日志：git log 文件名
查看某个用户的提交日志：git log --author=“author”
查看某条提交日志相信信息：git show 版本号
查看git全部命令：git --help
查看git某个命令的使用：git help 命令名
查看所有分支：git branch -a
查看当前分支：git branch
删除本地分支：git branch -d 分支名
删除远程分支：git push origin --delete 分支名



