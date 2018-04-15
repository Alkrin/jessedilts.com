<?php
	require("../classes/Database.class.php");
	require_once('../classes/my_twitter.php');
	require("../classes/sc_dbconn.php");
	class siliconquest
	{
		function getAllResults($db,$sql)
		{
			$query_id = mysql_query($sql, $db);
			$out = array();

			while ($row = mysql_fetch_array($query_id))
			{
				$out[] = $row;
			}

			mysql_free_result($query_id);
			return $out;
		}

		function getPageList()
		{
			$db = new Database(SCDB_SERVER, SCDB_USER, SCDB_PASS, SCDB_DATABASE);
            $db->connect(true);

			$sql = "SELECT * FROM sc_pagelist";

			$rows =	$db->fetch_all_array($sql);

            return $rows;
		}

        function makeFolder($path)
        {
            if (!file_exists($path))
            {
                @mkdir($path,0777,true); //Path,Permissions,Recursive
            }
            @chmod($path,0777);
        }

        function buildImageFolders()
        {
            //Make sure the root image folder is there.
            $this->makeFolder($_SERVER['DOCUMENT_ROOT']."Images");

            //Make sure there's a folder for every current project.
            $db = new Database(DB_SERVER, DB_USER, DB_PASS, DB_DATABASE);
            $db->connect();

            $sql = "SELECT id FROM project ORDER BY id";
            $rows = $db->fetch_all_array($sql);

            foreach ($rows as $row)
            {
                $id = $row['id'];
                $this->makeFolder($_SERVER['DOCUMENT_ROOT']."Images/$id");
            }

            return $sql;
        }


		function uploadFile($pid,$img,$name)
        {
            $path = $_SERVER['DOCUMENT_ROOT']."Images/$pid";

            //Make sure there's a folder to put the image in.
            $this->makeFolder($path);

            //Make sure the file name doesn't cause any problems.
			$name = preg_replace("/[^a-zA-Z0-9.\s]/","", $name);

            //Open the file and write the data.
            $fp = @fopen($path."/$name", 'w');
            @fclose($fp);
            @chmod($path."/$name",0777);

            $fp = @fopen($path."/$name", 'w');
            $decoded = @base64_decode($img);

			@fwrite($fp, $decoded);
			@fclose($fp);
			
			return $decoded;
        }

        function rmdirr($dirname)
        {
            // Sanity check
            if (!file_exists($dirname)) 
            {
                return false;
            }

            // Simple delete for a file
            if (is_file($dirname)) 
            {
                return @unlink($dirname);
            }

            // Loop through the folder
            $dir = dir($dirname);
            while (false !== $entry = @$dir->read()) 
            {
                // Skip pointers
                if ($entry == '.' || $entry == '..') { continue; }

                // Recurse
                $this->rmdirr("$dirname/$entry");
            }

            // Clean up
            $dir->close();
            return @rmdir($dirname);
        }
    }

    //$j = new siliconquest();
	//$out = $j->getPageList();
?>
