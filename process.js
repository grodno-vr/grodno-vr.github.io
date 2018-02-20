window.process = {
    env: {
        NODE_ENV: 'production'
    }
};

if (__DEV__) {
    window.process.env.NODE_ENV = 'development';
}