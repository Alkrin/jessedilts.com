<?php
	require("../classes/Database.class.php");
	require_once('../classes/my_twitter.php');
	require("../classes/home_dbconn.php");
	class jessedilts2011
	{
		function ExecuteSQLSelect($sql)
		{
			mysql_connect( $_ENV['DATABASE_SERVER'] , 'db131986' , 'eestimaa0' );
			mysql_select_db( 'db131986_homepage' );

			$rows = array();

			$result = mysql_query($sql);

			if ($result)
			{
				while ($row = mysql_fetch_assoc($result))
				{
					$rows[] = $row;
				}
			}

			return $rows;
		}

		function getHomePageData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM frontpagedata");
		}

		function getHighlights()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM highlights ORDER BY sortorder ASC");
		}

		function getExperienceData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM experiencedata");
		}

		function getNewsData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM news ORDER BY date DESC");
		}

		function getTitlesData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM titles ORDER BY sortorder ASC");
		}

		function getProjectsData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM projects ORDER BY sortorder ASC");
		}

		function getBiographyData()
		{
			return $this->ExecuteSQLSelect("SELECT * FROM biography ORDER BY sortorder ASC");
		}
	}
?>