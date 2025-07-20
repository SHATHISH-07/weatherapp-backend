const pingResolvers = {
    Query: {
        ping: () => {
            console.log("Ping received at", new Date());
            return "pong";
        },
    },
};

export default pingResolvers;