/* Farsi LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "fa",
		right_to_left: true,
		api: {
			wikipedia: "fa"
		},
		date: {
			month: ["دی", "بهمن", "اسفند", "فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر"],
			month_abbr: ["دی", "بهمن", "اسفند", "فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر "],
			day: ["يكشنبه","دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
			day_abbr: ["يكشنبه","دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "mmm d",
			full: "mmmm d',' yyyy",
			time_short: "h:MM:SS TT",
			time_no_seconds_short: "h:MM TT",
			time_no_seconds_small_date: "h:MM TT'<br/><small>'mmmm d',' yyyy'</small>'",
			full_long: "mmm d',' yyyy 'at' hh:MM TT",
			full_long_small_date: "hh:MM TT'<br/><small>mmm d',' yyyy'</small>'"
		},
		messages: {
			loading_timeline: "در حال بارگذاری ",
			return_to_title: "بازگشت",
			expand_timeline: "گسترش",
			contract_timeline: "بستن",
			wikipedia: "از ويكيپيديا",
			loading_content: "در حال بارگذاری محتوا",
			loading: "بارگذاری"
		}
	}
}
