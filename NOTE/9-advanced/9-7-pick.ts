{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};

	// 원하는 타입, 제한적인 타입 만드는 Pick
	type VideoMetadata = Pick<Video, "id" | "title">;

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
