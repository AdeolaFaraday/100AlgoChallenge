const prediction = (arr) => {
	let fArr = arr.filter(
		(a) => a.match_awayteam_name == 'Juventus' && a.match_awayteam_score > a.match_hometeam_score
	);
	let sArr = arr.filter(
		(a) => a.match_hometeam_name == 'Juventus' && a.match_hometeam_score > a.match_awayteam_score
	);
	let newArr = [...fArr, ...sArr];
	return `Junventus has won ${(newArr.length / arr.length) * 100}% i.e ${newArr.length} of the last ${
		arr.length
	} matches`;
};

console.log(
	prediction([
		{
			match_id: '443181',
			country_id: '165',
			country_name: 'Europe',
			league_id: '589',
			league_name: 'Champions League',
			match_date: '2020-11-04',
			match_status: 'Finished',
			match_time: '21:00',
			match_hometeam_id: '3652',
			match_hometeam_name: 'Ferencvaros',
			match_hometeam_score: '1',
			match_awayteam_id: '4187',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '4',
			match_hometeam_halftime_score: '0',
			match_awayteam_halftime_score: '1',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/3652_ferencvaros.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/589_champions-league.png',
			country_logo: '',
		},
		{
			match_id: '417584',
			country_id: '68',
			country_name: 'Italy',
			league_id: '262',
			league_name: 'Serie A',
			match_date: '2020-11-01',
			match_status: 'Finished',
			match_time: '15:00',
			match_hometeam_id: '4206',
			match_hometeam_name: 'Spezia',
			match_hometeam_score: '1',
			match_awayteam_id: '4187',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '4',
			match_hometeam_halftime_score: '1',
			match_awayteam_halftime_score: '1',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/4206_spezia.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/262_serie-a.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/68_italy.png',
		},
		{
			match_id: '446535',
			country_id: '57',
			country_name: 'Haiti',
			league_id: '221',
			league_name: 'Championnat National',
			match_date: '2020-11-01',
			match_status: 'Finished',
			match_time: '20:00',
			match_hometeam_id: '3621',
			match_hometeam_name: 'America des Cayes',
			match_hometeam_score: '1',
			match_awayteam_id: '3616',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '2',
			match_hometeam_halftime_score: '',
			match_awayteam_halftime_score: '',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/3621_america-des-cayes.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/3616_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/221_championnat-national.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/57_haiti.png',
		},
		{
			match_id: '443165',
			country_id: '165',
			country_name: 'Europe',
			league_id: '589',
			league_name: 'Champions League',
			match_date: '2020-10-28',
			match_status: 'Finished',
			match_time: '21:00',
			match_hometeam_id: '4187',
			match_hometeam_name: 'Juventus',
			match_hometeam_score: '0',
			match_awayteam_id: '7105',
			match_awayteam_name: 'Barcelona',
			match_awayteam_score: '2',
			match_hometeam_halftime_score: '0',
			match_awayteam_halftime_score: '1',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/7105_barcelona.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/589_champions-league.png',
			country_logo: '',
		},
		{
			match_id: '417573',
			country_id: '68',
			country_name: 'Italy',
			league_id: '262',
			league_name: 'Serie A',
			match_date: '2020-10-25',
			match_status: 'Finished',
			match_time: '20:45',
			match_hometeam_id: '4187',
			match_hometeam_name: 'Juventus',
			match_hometeam_score: '1',
			match_awayteam_id: '4188',
			match_awayteam_name: 'Verona',
			match_awayteam_score: '1',
			match_hometeam_halftime_score: '0',
			match_awayteam_halftime_score: '0',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/4188_verona.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/262_serie-a.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/68_italy.png',
		},
		{
			match_id: '443136',
			country_id: '165',
			country_name: 'Europe',
			league_id: '589',
			league_name: 'Champions League',
			match_date: '2020-10-20',
			match_status: 'Finished',
			match_time: '18:55',
			match_hometeam_id: '7767',
			match_hometeam_name: 'Dyn. Kyiv',
			match_hometeam_score: '0',
			match_awayteam_id: '4187',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '2',
			match_hometeam_halftime_score: '0',
			match_awayteam_halftime_score: '0',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/7767_dyn.-kiev.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/589_champions-league.png',
			country_logo: '',
		},
		{
			match_id: '445506',
			country_id: '57',
			country_name: 'Haiti',
			league_id: '221',
			league_name: 'Championnat National',
			match_date: '2020-10-19',
			match_status: 'Finished',
			match_time: '00:00',
			match_hometeam_id: '3619',
			match_hometeam_name: 'Real du Cap',
			match_hometeam_score: '2',
			match_awayteam_id: '3616',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '0',
			match_hometeam_halftime_score: '',
			match_awayteam_halftime_score: '',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/3619_real-du-cap.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/3616_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/221_championnat-national.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/57_haiti.png',
		},
		{
			match_id: '417561',
			country_id: '68',
			country_name: 'Italy',
			league_id: '262',
			league_name: 'Serie A',
			match_date: '2020-10-17',
			match_status: 'Finished',
			match_time: '20:45',
			match_hometeam_id: '4172',
			match_hometeam_name: 'Crotone',
			match_hometeam_score: '1',
			match_awayteam_id: '4187',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '1',
			match_hometeam_halftime_score: '1',
			match_awayteam_halftime_score: '1',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/4172_crotone.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/4187_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/262_serie-a.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/68_italy.png',
		},
		{
			match_id: '443237',
			country_id: '57',
			country_name: 'Haiti',
			league_id: '221',
			league_name: 'Championnat National',
			match_date: '2020-10-11',
			match_status: 'Finished',
			match_time: '22:00',
			match_hometeam_id: '3616',
			match_hometeam_name: 'Juventus',
			match_hometeam_score: '1',
			match_awayteam_id: '3618',
			match_awayteam_name: 'Don Bosco',
			match_awayteam_score: '1',
			match_hometeam_halftime_score: '',
			match_awayteam_halftime_score: '',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/3616_juventus.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/3618_don-bosco.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/221_championnat-national.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/57_haiti.png',
		},
		{
			match_id: '442765',
			country_id: '57',
			country_name: 'Haiti',
			league_id: '221',
			league_name: 'Championnat National',
			match_date: '2020-10-08',
			match_status: 'Finished',
			match_time: '22:00',
			match_hometeam_id: '14516',
			match_hometeam_name: 'Triomphe Liancourt',
			match_hometeam_score: '2',
			match_awayteam_id: '3616',
			match_awayteam_name: 'Juventus',
			match_awayteam_score: '0',
			match_hometeam_halftime_score: '',
			match_awayteam_halftime_score: '',
			match_live: '0',
			team_home_badge: 'https://apiv2.apifootball.com/badges/14516_triomphe-liancourt.png',
			team_away_badge: 'https://apiv2.apifootball.com/badges/3616_juventus.png',
			league_logo: 'https://apiv2.apifootball.com/badges/logo_leagues/221_championnat-national.png',
			country_logo: 'https://apiv2.apifootball.com/badges/logo_country/57_haiti.png',
		},
	])
);
