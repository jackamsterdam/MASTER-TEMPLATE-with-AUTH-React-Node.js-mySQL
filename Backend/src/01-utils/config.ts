class Config {

}

class DevelopmentConfig extends Config {
    isDevelopment = true
    logFile = 'logger.log'
    mysql = { host: 'localhost', user: 'root', password: '', database: '' }
}

class ProductionConfig extends Config {
    isDevelopment = false
    logFile = 'logger.log'
    mysql = { host: 'localhost', user: 'root', password: '', database: '' }
}

const config = process.env.NODE_ENV === 'production' ? new ProductionConfig() : new DevelopmentConfig()
export default config 