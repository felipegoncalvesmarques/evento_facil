
<script>
String ipAddress = req.getHeader("x-forwarded-for");
if (ipAddress == null) {
    ipAddress = req.getHeader("X_FORWARDED_FOR");
    if (ipAddress == null){
        ipAddress = req.getRemoteAddr();
    }
}

</script>
