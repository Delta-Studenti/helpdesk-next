import Head from "next/head";
import React, { useState } from "react";
import { AppShell, Navbar, useMantineTheme, Text, MediaQuery, Burger, Header, ScrollArea, Accordion, ThemeIcon, List, Pagination } from "@mantine/core";
import LayoutButton from "./button";
import { GoIssueOpened } from "react-icons/go";
import { BsPlusCircleFill } from "react-icons/bs";

type MainLayoutProps = {
    children: React.ReactNode;
    title: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    title
}) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <AppShell
                navbarOffsetBreakpoint="sm"
                fixed
                navbar={
                    <Navbar
                        padding="md"
                        hiddenBreakpoint="sm"
                        hidden={!opened}
                        width={{ sm: 300, lg: 400 }}
                    >
                        <Navbar.Section
                            grow
                            component={ScrollArea}
                            ml={-10}
                            mr={-10}
                            sx={{ paddingLeft: 10, paddingRight: 10 }}
                        >
                        <LayoutButton
                            icon={<GoIssueOpened />}
                            text="Tikety"
                            href="/"
                        /><br />

                        <LayoutButton
                            icon={<BsPlusCircleFill />}
                            text="Vytořit tiket"
                            href="/create-ticket"
                        />

                        </Navbar.Section>

                        <Navbar.Section><Text>User</Text></Navbar.Section>
                    </Navbar>
                }
                header={
                    <Header height={70} padding="md">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <Text size="lg">Delta Helpdesk - </Text>
                            <Text>{title}</Text>
                        </div>
                    </Header>
                }
            >
                {children}
            </AppShell>
        </>
    );
};

export default MainLayout;
