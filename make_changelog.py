import subprocess, json
out = subprocess.run(["git","-C","C:/mc-server","log","--format=%ad|%s","--date=short"],capture_output=True,text=True,encoding="utf-8").stdout
items=[]
for l in out.splitlines():
    d,_,s=l.partition("|")
    if s.startswith("ServerTools "):
        items.append({"d":d,"t":s[len("ServerTools "):]})
json.dump(items,open("C:/mc-web/data/changelog.json","w",encoding="utf-8"),ensure_ascii=False)
print(len(items))
