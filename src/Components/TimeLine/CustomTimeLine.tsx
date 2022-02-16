import React, { FC, useMemo } from "react";
import { Timeline, Text } from "@mantine/core";
import { MdMessage, MdPanoramaFishEye } from "react-icons/md";
import { TicketQuery } from "../../graphql/frontend/ticket.graphql";

type messages = NonNullable<TicketQuery["ticket"]>["messages"];
type statusses = NonNullable<TicketQuery["ticket"]>["statuses"];

type CustomTimeLineProps = {
	messages: messages;
	statusses: statusses;
};

const CustomTimeLine: FC<CustomTimeLineProps> = ({ messages, statusses }) => {
	const mixed = useMemo(() => {
		return [...messages, ...statusses].sort((a, b) => a.createdAt - b.createdAt);
	}, [messages, statusses]);

	return (
		<Timeline active={999} bulletSize={24} lineWidth={2}>
			{mixed.map((message) =>
				message.__typename === "Message" ? (
					<Timeline.Item bullet={<MdMessage size={12} />} title={`${message.user.firstName} ${message.user.lastName}`} key={message.id}>
						<Text color="dimmed" size="sm">
							{message.text}
						</Text>
						<Text size="xs" style={{ marginTop: 4 }}>{new Date(message.createdAt).toLocaleString("cs")}</Text>
					</Timeline.Item>
				) : message.__typename === "Status" ? (
					<Timeline.Item bullet={<MdPanoramaFishEye size={12} />} title={message.title} key={message.title}>
						<Text size="xs" style={{ marginTop: 4 }}>{new Date(message.createdAt).toLocaleString("cs")}</Text>
					</Timeline.Item>
				) : (
					<div>Chyba</div>
				))}
		</Timeline>
	)
};

export default CustomTimeLine;
