# Telegram Web App

This is a simple web application designed to be used exclusively through Telegram.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/telegram-web-app.git
    cd telegram-web-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your configuration:
    ```bash
    touch .env
    ```

    Add the following lines to the `.env` file:
    ```dotenv
    PORT=3000
    TELEGRAM_BOT_TOKEN=your_telegram_bot_token
    ```

4. Run the application:
    ```bash
    npm start
    ```

## Usage

Set the webhook for your Telegram bot to point to `/webhook` endpoint of your server.

## License

MIT
