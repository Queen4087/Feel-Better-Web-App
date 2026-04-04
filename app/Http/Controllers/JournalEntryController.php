<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JournalEntry;

class JournalEntryController extends Controller
{
    public function index()
    {
        return JournalEntry::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
        ]);

        return JournalEntry::create($validated);
    }

    public function destroy(JournalEntry $journalEntry)
    {
        $journalEntry->delete();
        return response()->noContent();
    }
}
