<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoodResponseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $responses = [
            'sad' => "I'm sorry you're feeling this way. It's okay to be sad. Remember to be kind to yourself today. 💙",
            'stressed' => "Take a deep breath. You're doing your best, and that is enough. High stress is tough, but you are tougher. 🌿",
            'anxious' => "Focus on your breathing. You are safe here. Let's try to find one small thing you can control right now. 🧘‍♂️",
            'tired' => "Rest is productive too. Your body and mind deserve a break. Sleep or a quiet moment can work wonders. 😴",
            'neutral' => "A calm day is a good day. How can we make it even a tiny bit better? maybe a cup of tea? ☕",
            'happy' => "That's wonderful! I'm so glad to hear you're feeling good. Let's keep that momentum going! ✨"
        ];

        foreach ($responses as $mood => $message) {
            \App\Models\MoodResponse::create([
                'mood_type' => $mood,
                'message' => $message
            ]);
        }
    }
}
