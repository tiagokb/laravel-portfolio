# Personal Portfolio - Laravel, React & Inertia

This is a simple yet functional personal portfolio project built with **Laravel**, **React**, and **Inertia.js**. The main goal of this project is to demonstrate proficiency in full-stack development using these technologies.

## Features:
- **Profile Management**: Manage your personal information such as bio, links, and social media profiles through an intuitive admin panel.
- **Project Showcase**: Display your portfolio of projects, each with a description, image, and relevant links.
- **Admin Panel**: Easily control the look and content of the portfolio, including themes, profile updates, and project entries.
- **Responsive Design**: Optimized for different screen sizes, ensuring a great user experience across all devices.

## Technologies Used:
- **Laravel**: Backend API and business logic.
- **React**: Frontend components for a dynamic and interactive user interface.
- **Inertia.js**: Seamless integration between Laravel and React for SPA-like navigation.
- **Tailwind CSS**: For clean and customizable styling.

## Project Goals:
This portfolio serves as a demonstration of my coding skills and understanding of modern web technologies. It's open-source for others to explore, but primarily serves as a practical example of full-stack development in **Laravel** and **React**.

Feel free to clone and adapt it to your own needs!

## Installation Instructions

1. Clone the repository:
    ```bash
    https://github.com/tiagokb/laravel-portfolio.git
    ```

2. Install dependencies:
    ```bash
    composer install
    npm install
    ```

3. Set up your `.env` file and generate the application key:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Run migrations
    ```bash
    php artisan migrate
    ```

5. Start the development server:
    ```bash
    php artisan serve
    npm run dev
    ```

## Seeding a Default User

To seed the database with a default user, follow these steps:

1. Open the `DatabaseSeeder.php` file located in the `database/seeders` directory.

2. Add the following code (if not already present) to create a default user:

    ```php
    \App\Models\User::factory()->create([
        'name' => 'Your Name',
        'email' => 'your-email@example.com',
        'password' => bcrypt('your-password'), // Make sure to use a secure password
    ]);
    ```

3. Run the database seeder to populate the database with this default user:

    ```bash
    php artisan db:seed
    ```

4. You can now log in with the default user credentials.

---

Feel free to customize the user information as needed!


## Contributing
Feel free to open an issue or submit a pull request if you'd like to improve this project.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
