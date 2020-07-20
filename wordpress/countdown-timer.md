# Countdown Timer
![Gif of Countdown Timer](images/countdown-timer.gif)


## Tutorial
1. Oxygen → Templates → Add New Reusable Part  
2. Add title `Countdown Timer`  
3. Click on ``+Shortcodes`` and insert:
    ```
    [ct_text_block ct_sign_sha256='123' ct_options='{"ct_id":1,"ct_parent":0,"selector":"text_block-2-84","original":{"tag":"p","custom-js":"Ly8gU2V0IHRoZSBkYXRlIHdlJ3JlIGNvdW50aW5nIGRvd24gdG8KdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgiRGVjIDI0LCAyMDIwIDEyOjAwOjAwIikuZ2V0VGltZSgpOwoKLy8gVXBkYXRlIHRoZSBjb3VudCBkb3duIGV2ZXJ5IDEgc2Vjb25kCnZhciB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7CgogIC8vIEdldCB0b2RheSdzIGRhdGUgYW5kIHRpbWUKICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7CiAgICAKICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vdyBhbmQgdGhlIGNvdW50IGRvd24gZGF0ZQogIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7CiAgICAKICAvLyBUaW1lIGNhbGN1bGF0aW9ucyBmb3IgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMKICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpOwogIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpOwogIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTsKICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7CiAgICAKICAvLyBPdXRwdXQgdGhlIHJlc3VsdCBpbiBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzICJjb3VudGRvd24tdGltZXIiCiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgiY291bnRkb3duLXRpbWVyIilbMF0uaW5uZXJIVE1MID0gZGF5cyArICJkICIgKyBob3VycyArICJoICIKICArIG1pbnV0ZXMgKyAibSAiICsgc2Vjb25kcyArICJzICI7CiAgICAKICAvLyBDb3VudCBkb3duIGlzIG92ZXIsIGRvIHNvbWV0aGluZwogIGlmIChkaXN0YW5jZSA8IDApIHsKICAgIGNsZWFySW50ZXJ2YWwoeCk7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZGVtbyIpLmlubmVySFRNTCA9ICJUaW1lIGV4cGlyZWQiOwogIH0KICAKfSwgMTAwMCk7"},"activeselector":"countdown-timer","classes":{"0":"countdown-timer"}}'][/ct_text_block]
    ```
4. Save
5. Go to your Page, Add → Reusable → `Countdown Timer`
6. Click on the Text and make sure you select the class `countdown-timer` then go to Advanced → JavaScript → Change `countDownDate` to desired date.
