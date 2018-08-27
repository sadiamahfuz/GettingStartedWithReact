import React from "react"

const VideoListItem = (props) => {
	const video = props.video;

	return (
		<li className="list-group-item">
			<div classname="video-list media">
				<div className="media-left">
					<img className="media-object" />
				</div>
				<div className="media-body">
					<div className="media-heading" />
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;