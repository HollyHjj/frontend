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



