const parseEnv = () => {
    const rss=[];
    for (let key in process.env) {
        if (key.substring(0,4)==="RSS_")
            rss.push(key+"="+process.env[key]);
    }
    console.log(rss.join("; "));
};

parseEnv();