<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Faq;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    // DatabaseSeeder.php
    public function run(): void
    {
        // Truncate existing users (if needed)
        User::truncate();

        // Seed new user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
