---
title: The Oww Protocol
date: 2019-12-15
Description: "A joke application protocol allowing users to send \"Oww\" messages to the server."
---

As the Great [Akilan](https://akilan.io) always said... "Oww". This protocol
allows people to post message on a messaging board "the Oww board".  

There are two methods in this protocol. You can either:

- Post a message in the following format:  
	`<Name>: Oww <optional message>`  
	e.g.  
	`Humaid: Oww that's cool`  

	All messages must start with "Oww" (case-insensitive), and the server should
	always respond with an `Oww` if the request is successful.
- Read the Oww board:  
	`Owws`


You can give it a try if you have the `nc` (netcat) tool installed.

```sh
$ echo "Naeem: Oww" | nc humaidq.ae 1999
$ echo "Owws" | nc humaidq.ae 1999
```

### Server Information

The server is implemented in [Go](https://golang.org), you can [view the source
here](https://git.sr.ht/~humaid/oww-prot/tree/master/main.go).
