const parseArgs = () => {
    const args=[]
    for (let i=2;i<process.argv.length;i+=2)
        args.push(process.argv[i].substring(2)+' is '+process.argv[i+1]);
    console.log(args.join(", "));
};

parseArgs();