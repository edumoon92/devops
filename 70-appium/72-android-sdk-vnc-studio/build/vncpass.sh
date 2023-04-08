#!/bin/sh

password="tta123!@"
password_view_only="tta123!@#"

/usr/bin/expect <<EOF
spawn vncpasswd
expect "Password:"
send "$password\r"
expect "Verify:"
send "$password\r"
expect "Would you like to enter a view-only password (y/n)?"
send "y\r"
expect "Password:"
send "$password_view_only\r"
expect "Verify:"
send "$password_view_only\r"
expect eof
exit
EOF
