import {
    Box,
    Card,
    CardActions,
    CardContent,
    Grid,
    SvgIcon,
    useTheme,
} from '@suid/material'
import { Octokit } from 'octokit'
import { createSignal, onMount, Suspense } from 'solid-js'
import { Motion } from 'solid-motionone'
import MyLink from '~/component/MyLink.tsx'
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import MyTypography from './MyTypography'

const theme = useTheme()

const octokit = new Octokit({})

type PRresponse = GetResponseDataTypeFromEndpointMethod<
    typeof octokit.rest.pulls.get
>

const fetchPR = async (link: string) => {
    const repo = link.split('/')[4]
    const owner = link.split('/')[3]
    const prNumber = parseInt(link.split('/')[6])

    const { data } = await octokit.rest.pulls.get({
        owner: owner,
        repo: repo,
        pull_number: prNumber,
    })
    return data
}

function GitHubCard(props: { link: string }) {
    const [prData, setPrData] = createSignal<PRresponse>()

    onMount(() => {
        fetchPR(props.link).then((data) => {
            setPrData(data)
        })
    })

    return (
        <Grid item xs={6}>
            <Motion
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.5 }}
                inView={{ opacity: 1, scale: 1 }}
                inViewOptions={{
                    once: true,
                }}
                style={{
                    height: '100%',
                }}
            >
                <Suspense
                    fallback={<Card sx={{ m: 2, p: 2 }}>Loading...</Card>}
                >
                    <Card sx={{ m: 2, p: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            alignSelf: 'center',
                                            mr: 2,
                                        }}
                                    >
                                        {prData()?.merged ? (
                                            <SvgIcon
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <path
                                                    fill={'blueviolet'}
                                                    fill-rule="evenodd"
                                                    d="M5.75 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 19.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM5.75 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 15a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 13.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
                                                />
                                                <path
                                                    fill={'blueviolet'}
                                                    fill-rule="evenodd"
                                                    d="M6.5 7.25c0 2.9 2.35 5.25 5.25 5.25h4.5V14h-4.5A6.75 6.75 0 015 7.25h1.5z"
                                                />
                                                <path
                                                    fill={'blueviolet'}
                                                    fill-rule="evenodd"
                                                    d="M5.75 16.75A.75.75 0 006.5 16V8A.75.75 0 005 8v8c0 .414.336.75.75.75z"
                                                />
                                            </SvgIcon>
                                        ) : prData()?.state == 'open' ? (
                                            <SvgIcon
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <path
                                                    fill={'green'}
                                                    fill-rule="evenodd"
                                                    d="M4.75 3a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM4.75 17.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm17.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM16 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
                                                />
                                                <path
                                                    fill={'green'}
                                                    fill-rule="evenodd"
                                                    d="M4.75 7.25A.75.75 0 015.5 8v8A.75.75 0 014 16V8a.75.75 0 01.75-.75zm8.655-5.53a.75.75 0 010 1.06L12.185 4h4.065A3.75 3.75 0 0120 7.75v8.75a.75.75 0 01-1.5 0V7.75a2.25 2.25 0 00-2.25-2.25h-4.064l1.22 1.22a.75.75 0 01-1.061 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0z"
                                                />
                                            </SvgIcon>
                                        ) : (
                                            <SvgIcon
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <path
                                                    fill={'red'}
                                                    d="M22.266 2.711a.75.75 0 10-1.061-1.06l-1.983 1.983-1.984-1.983a.75.75 0 10-1.06 1.06l1.983 1.983-1.983 1.984a.75.75 0 001.06 1.06l1.984-1.983 1.983 1.983a.75.75 0 001.06-1.06l-1.983-1.984 1.984-1.983z"
                                                />
                                                <path
                                                    fill={'red'}
                                                    fill-rule="evenodd"
                                                    d="M4.75 1.5a3.25 3.25 0 00-.745 6.414A.758.758 0 004 8v8a.81.81 0 00.005.086A3.251 3.251 0 004.75 22.5a3.25 3.25 0 00.745-6.414A.758.758 0 005.5 16V8a.758.758 0 00-.005-.086A3.251 3.251 0 004.75 1.5zM3 4.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm0 14.5a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm13 0a3.251 3.251 0 012.5-3.163V9.625a.75.75 0 011.5 0v6.462a3.251 3.251 0 01-.75 6.413A3.25 3.25 0 0116 19.25zm3.25-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                                                />
                                            </SvgIcon>
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '70%',
                                        }}
                                    >
                                        <MyLink
                                            to={
                                                prData()?.base.repo.html_url ??
                                                ''
                                            }
                                            text={
                                                prData()?.base.repo.full_name ??
                                                ''
                                            }
                                            color={theme.palette.primary.main}
                                            variant={'h6'}
                                            sx={{ m: 0 }}
                                        />
                                        <MyTypography variant="subtitle1">
                                            {prData()?.base.repo.description}
                                        </MyTypography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignSelf: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <SvgIcon
                                            sx={{
                                                width: '20px',
                                                height: '20px',
                                                mr: 1,
                                            }}
                                        >
                                            <path
                                                fill="yellow"
                                                fill-rule="evenodd"
                                                d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"
                                            />
                                        </SvgIcon>
                                        <MyTypography variant="body1">
                                            {prData()?.base.repo
                                                .stargazers_count ?? 0}
                                        </MyTypography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <SvgIcon
                                            sx={{
                                                width: '20px',
                                                height: '20px',
                                                mr: 1,
                                            }}
                                        >
                                            <path
                                                fill="grey"
                                                fill-rule="evenodd"
                                                d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
                                            />
                                            <path
                                                fill="grey"
                                                fill-rule="evenodd"
                                                d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
                                            />
                                            <path
                                                fill="grey"
                                                fill-rule="evenodd"
                                                d="M11.25 16.25v-5h1.5v5h-1.5z"
                                            />
                                        </SvgIcon>
                                        <MyTypography variant="body1">
                                            {prData()?.base.repo.forks_count ??
                                                0}
                                        </MyTypography>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                        <hr />
                        <CardActions
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <MyTypography variant="h6">
                                <MyLink
                                    to={prData()?.html_url ?? ''}
                                    target="_blank"
                                    text={'#' + prData()?.number}
                                    color={theme.palette.primary.main}
                                />
                                {prData()?.title}
                            </MyTypography>
                            <MyTypography variant="subtitle1">
                                {prData()?.merged
                                    ? 'Was merged on ' + prData()?.merged_at
                                    : prData()?.state == 'closed'
                                      ? 'Was closed on ' + prData()?.closed_at
                                      : 'Is open since ' + prData()?.created_at}
                            </MyTypography>
                        </CardActions>
                    </Card>
                </Suspense>
            </Motion>
        </Grid>
    )
}

export default GitHubCard
