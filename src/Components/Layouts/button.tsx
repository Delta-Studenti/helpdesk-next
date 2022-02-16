import { Group, UnstyledButton, Avatar, Text } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

type LayoutButtonProps = {
  icon: React.ReactElement;
  text: string;
  href: string;
};

const LayoutButton: FC<LayoutButtonProps> = ({ icon, text, href }) => (
  <Link href={href}>
    <UnstyledButton>
      <Group>
        <Avatar size={40} color="blue">{icon}</Avatar>
        <div>
          <Text>{text}</Text>
        </div>
      </Group>
    </UnstyledButton>
  </Link>
);

export default LayoutButton;
