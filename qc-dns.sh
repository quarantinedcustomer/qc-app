npx now dns add quarantinedcustomer.com '@' MX ASPMX.L.GOOGLE.COM 1
npx now dns add quarantinedcustomer.com '@' MX ALT1.ASPMX.L.GOOGLE.COM 5
npx now dns add quarantinedcustomer.com '@' MX ALT2.ASPMX.L.GOOGLE.COM 5
npx now dns add quarantinedcustomer.com '@' MX ASPMX2.GOOGLEMAIL.COM 10
npx now dns add quarantinedcustomer.com '@' MX ASPMX3.GOOGLEMAIL.COM 10
npx now dns add quarantinedcustomer.com '@' TXT "v=spf1 include:_spf.google.com ~all"
npx now dns add quarantinedcustomer.com 'google._domainkey' TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtSClBALH1B/n5+qU19SkshYW9GQsPYjz40ks6cf29oqXhf0T8SRRrheY//ltRO+P8VtcV6YpCAyjFyUDAXi3c6V/fBD7ecfAm/m9hBvwFzjDWwydRXV/G000hL+4km0HdEiAc58btNJTX4wuzcOHx33TCK3E0VH5oNNeaOBTC+3c0TFUBEQ6Dp6QlsJQvnBkPm92dN3jc0J2vvPOIq0PUMaH1bApGkO5PvV+U/L4OP7TXmGLNc3cMsOH8TAQMsSJ0SWg6aSrF2ge5oUEErrnnnEG2ouzYx9fOBMfeT46DeSOxQpXsSctBNj7TfjTE5g8meIrqWeeYHIQzKCr907KewIDAQAB"
npx now dns add quarantinedcustomer.com 'effc18d9._domainkey' TXT "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnC1WUfBXy4D6BRJp3+MINxpP1OZyYFwxdEY+2MdF9MmtXB6xzi49d4bYoOMuuVh+mYf3CelOUu+yeRGkndHoOaeLYjgPnakjA+wuS2c9IZUHzmOn7TaNbCiqbrhUgw/H/rM1YiWYWHCIKuU+HoJMRVUE2b8boigWzMRK8XtCIvQIDAQAB"


