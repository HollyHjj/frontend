Hello


��gitbash

�鿴���е�key
$ ls -al ~/.ssh

�����µ�key
ssh-keygen -t rsa -b 4096 -C "hjjcumt@126.com"

�鿴Public Key
cat ~/.ssh/id_rsa.pub

����github key����ҳ�棬https://github.com/settings/ssh/new
ճ����Key���棬�����

�ص�gitBash
���� ssh -T git@github.com������ܻῴ����������ʾ��
Ȼ������㿴�� Permission denied (publickey). ��˵����ʧ���ˣ�
��ص��� 1 ���������ǵģ��ص��� 1 ��������
����㿴�� Hi xxx! You've successfully authenticated, 
but GitHub does not provide shell access. ��˵����ɹ��ˣ�

1.����
git init

ɾ��ԭ��origin
$ git remote rm origin

2.���origin�ֿ�
HTTPS��ʽ�����Ƽ���
git remote add origin https://github.com/HollyHjj/frontend.git
SSH��ʽ ���Ƽ���
git remote add origin git@github.com:HollyHjj/frontend.git

3.view git remote
$ git remote -v

4.pull�ǽ������Զ�ֿ̲�ͬ�������زֿⲢmerge������
$ git pull origin master

5.fetch�ǵ����������Զ�ֿ̲�ͬ�������زֿ⣬������merge
git fetch                  ȡԶ�ֿ̲������أ�����汾����.git/FETCH_HEAD��
git diff origin/master     �Ƚ�Զ��origin/master��֧�뱾�ز��
git merge origin           ��Զ��origin/master merge�����زֿ�
          

$ git add .

$ git commit -m "add test1.cpp"

$ git log

$ git push origin master

��¡���룺git clone Զ�ֿ̲��url
�������䣺git config --global user.email
�����û�����git config --global user.name
��Զ�ֿ̲��������뵽���أ�git pull
�������ش�����޸ģ�git checkout -- <file>
�����ش�����ӵ���������git add * .
�Ƴ�add�����������ļ���git reset HEAD <file>
�����ش����ύ�����زֿ⣺git commit -m"��־����"
�����زֿ�ͬ����Զ�ֿ̲⣺git push origin master
�鿴��־��git log
�鿴ĳ���ļ����ύ��־��git log �ļ���
�鿴ĳ���û����ύ��־��git log --author=��author��
�鿴ĳ���ύ��־������Ϣ��git show �汾��
�鿴gitȫ�����git --help
�鿴gitĳ�������ʹ�ã�git help ������
�鿴���з�֧��git branch -a
�鿴��ǰ��֧��git branch
ɾ�����ط�֧��git branch -d ��֧��
ɾ��Զ�̷�֧��git push origin --delete ��֧��



