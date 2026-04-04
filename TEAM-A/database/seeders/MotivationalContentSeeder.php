<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MotivationalContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $messages = [
            ['text' => "You are stronger than you think.", 'type' => "quote"],
            ['text' => "This too shall pass.", 'type' => "quote"],
            ['text' => "Why don't scientists trust atoms? Because they make up everything!", 'type' => "joke"],
            ['text' => "You've got this!", 'type' => "message"],
            ['text' => "Kindness is free. Sprinkle it everywhere.", 'type' => "quote"],
            ['text' => "What do you call a fake noodle? An Impasta!", 'type' => "joke"],
            ['text' => "Believe in yourself.", 'type' => "message"],
            ['text' => "Every day is a fresh start.", 'type' => "quote"]
        ];

        foreach ($messages as $msg) {
            \App\Models\MotivationalContent::create($msg);
        }
    }
}
