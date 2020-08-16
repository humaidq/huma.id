---
title: "Resolving Permission Errors with Borg Mounts"
date: 2020-08-16
---

I use [Borg] to compress, encrypt, and deduplicate my backups, and it has been
working really well. Recently, I was trying to retrieve some files and got the
following error messages:

<!--more-->
```
...
cp: cannot open '/path/to/borg/mount/file.txt' for reading: Permission denied
...
```

After reading documentation, the solution I found for this issue is to provide
mount options to Borg, setting the permission of the files mounted.

```
borg mount -o uid=$UID,umask=077 /mnt/drive/borg::my-backup borg-mnt
```

This resolved the issues.

[Borg]: https://www.borgbackup.org/
