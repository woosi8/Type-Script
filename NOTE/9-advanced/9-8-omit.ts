{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};

	// Pick과 반대 : 원하는것을 제외함
	type VideoMetadata = Omit<Video, "url" | "data">;

	function getVideo(id: string): Video {
		return {
			id,
			title: "video",
			url: "https://..",
			data: "byte-data..",
		};
	}
	function getVideoMetadata(id: string): VideoMetadata {
		return {
			id: id,
			title: "title",
		};
	}
}
