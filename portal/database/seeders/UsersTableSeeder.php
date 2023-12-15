<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create a user record manually
        User::create([
            'name' => 'John Doe',
            'email' => 'admin@nca.com',
            'password' => bcrypt('12345678'),
            'email_verified_at' => now(),
            'role' => 0,
            'status' => 1,
        ]);

        // You can add more user records as needed
    }
}
