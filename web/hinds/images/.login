#
# @(#)Login	1.7 10/09/96 (cc.utexas.edu)
# @(#) /usr/share/src/private/ut/share/usr/local/lib/SCCS/s.Login
#
# Sample .login for new csh users
#
# The following line is used to set your terminal type
# when you login.  
setenv TERM `tset - -Q -m 'unknown:?vt100' -m 'su:?vt100' -m 'dumb:?vt100' -m 'network:?vt100'`
setenv EDITOR vi
set mail = (0 /usr/spool/mail/$USER)
if ( -d /var/mail ) set mail = (0 /var/mail/$USER)
# Current directory put at end of path for security reasons
setenv PATH /usr/local/bin:${PATH}:
# Delete '# ' at beginning of next line if you do NOT want ^D to log you out.
# set ignoreeof
