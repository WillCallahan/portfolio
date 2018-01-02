<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Mail\Message;

use App\Http\Controllers\Controller;

class ContactController extends Controller {

	public function store(Request $request) {
		$request->validate([
			'message' => 'required',
			'subject' => 'required',
			'email' => 'email'
		]);
		\Mail::raw($request->input("message"), function(Message $message) use ($request) {
			$to = [env("MAIL_FROM_ADDRESS")];
			if ($request->has('email'))
				array_push($to, $request->input('email'));
			$message->to($to);
			$message->subject($request->input("subject"));
		});
		return response(array("message" => "Successfully sent email."), 200);
	}

}
