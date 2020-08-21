## tar 압축 해제 - tar: time stamp s in the future 에러 발생 시
- 기존 압축 파일이 생성된 서버의 시간 값보다 현재 서버의 시스템 시간 값이 과거일 경우에 나타는 에러

- 방법 1 : 시스템 시간 동기화
  ```sh
  /usr/bin/rdate -s time.bora.net && /sbin/clock -w > /dev/null 2>&1
  ```

- 방법 2 : tar 압축해제 시 m 옵션부여
  ```sh
  tar -xmvf tar파일명.tar
  ```

<hr>
<br>

## Linux 시스템 삭제 파일 확인 및 복구
> 파일 시스템 확인
```sh
df -h
```
```
Filesystem            Size  Used Avail Use% Mounted on
/dev/sda1             9.7G  1.2G  8.1G  13% /
/dev/sda8             405G   43G  342G  11% /home
/dev/sda7             9.7G  151M  9.1G   2% /tmp
/dev/sda3              30G  1.1G   27G   4% /var
/dev/sda2              49G  2.2G   44G   5% /usr
/dev/sda5              30G  215M   28G   1% /usr/local
tmpfs                  12G     0   12G   0% /dev/shm
```
```sh
cp testfile /home/testfile1 #파일생성
ls -i /home/testfile1
```
```
16 /home/testfile1 #inode값 16 확인
```
```sh
rm -rf /home/testfile1 #파일삭제
debugfs -w /dev/sda8

#-- shell 입력상태

debugfs:  lsdel #지운파일 리스트 확인
 Inode  Owner  Mode    Size    Blocks   Time deleted
 81601      0  40755   4096    1/   1 Mon Jan 14 04:12:05 2013
    16      0 100644      8    1/   1 Mon Jan 14 05:43:46 2013 #방금 지운 inode 16번 파일

2 deleted inodes found.
 
debugfs:  undel <16> rescue.file #undel명령어를 이용하여 복구
debugfs:  lsdel #복구후 해당 파일 없어짐
 Inode  Owner  Mode    Size    Blocks   Time deleted
 81601      0  40755   4096    1/   1 Mon Jan 14 04:12:05 2013
 
1 deleted inodes found.
 
debugfs:  quit
```
```sh
ls -i /home/rescue.file #복구한 파일 확인
16 /home/rescue.file #지우기전의 inode값을 그대로 가져옴
```