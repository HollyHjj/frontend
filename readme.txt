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



