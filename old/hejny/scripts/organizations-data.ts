import { IOrganizationInfo } from './generate-projects/interfaces/IOrganizationInfo';

// !!! Rename the file to projects-organization.ts
export const TAGS = [
    'old' /* <- [0] Also include archived */,
    'library',
    'utility',
    'game',
    'board-game',
    'hackathon' /* <- !!!projects Also search word hackathon automatically in README */,
    'draft' /* <- [0] Also include project with small number of commits */,
    'template',
    'collboard-module-template',
    'personal',
    'talk' /* <- !!!projects Marked with this should have separate organization */,
    'crypto' /* <- !!!projects Marked with this should have separate organization */,
    'collboard-module' /* <- !!!projects Marked with this should be under collboard organization */,
    'collboard-file-support' /* <- !!!projects Marked with this should be under collboard organization */,
];

// !!!projects LSD + feeders should have better names + links
// !!!projects Use this tags in projects
// !!!projects Ignore private projects
// !!!projects [0] Archived projects to special section to bottom
// !!!projects Grouping of pdfmk
// !!!projects Hide drafts
// !!!projects Create label for BUG / main project in organization

export const ORGANIZATIONS: Omit<IOrganizationInfo, 'projects'>[] = [
    // TODO: List theese organizations dynamically
    // https://github.com/settings/organizations

    // TODO: !! Make cathegory/organization for libraries (?) + templates (template on github) + hackathon projects (with GH tag hackathon-project ) (and maybe some more)

    // { organizationName: 'AllForJan', organizationTitle: 'AllForJan' },
    { organizationName: 'birdlife-cz', organizationTitle: '🐦 Česká společnost ornitologická' },
    { organizationName: 'collboard', organizationTitle: '🖋 Collboard.com' },
    // {organizationName: 'Hackathon-Vzdelavani', organizationTitle: 'AllForJan'},
    // {organizationName: 'jumpingcoders', organizationTitle: 'AllForJan'},
    // {organizationName: 'KodujProCesko2018', organizationTitle: 'AllForJan'},
    // {organizationName: 'Learn-by-doing', organizationTitle: 'AllForJan'},
    { organizationName: 'sigmastamp', organizationTitle: '📜 SigmaStamp' },
    // { organizationName: 'SmartCityHackathon', organizationTitle: 'AllForJan' },
    // { organizationName: 'student-dreamers', organizationTitle: 'AllForJan' },
    // { organizationName: 'teamhackback', organizationTitle: 'AllForJan' },
    // { organizationName: 'techheavencz', organizationTitle: 'AllForJan' },
    // {organizationName: 'thefindersteam', organizationTitle: 'AllForJan'},
    { organizationName: 'toilet-pay', organizationTitle: '🧻 Toilet Pay' },
    { organizationName: 'townsgame', organizationTitle: '🌆 Towns' },
    { organizationName: 'vrpaint', organizationTitle: '🖌 VR paint' },
    { organizationName: 'webappgames', organizationTitle: '🎮 WebAppGames' },
];

// TODO: List all organizations for user dynamically in findProjectsOnGithub
/*const { data: organizationsPage } = await githubOctokit.rest.orgs.listForUser({
    username: GITHUB_USERNAME,
    page: 2,
    per_page: 100, // TODO: pagination
});
*/
