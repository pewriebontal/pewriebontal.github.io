@echo off
@rem ##########################################################################
@rem
@rem   Clean workingdir script for Windows
@rem
@rem ##########################################################################

rmdir /Q /S .cache
echo deleted .cache

rmdir /Q /S public
echo deleted public

rmdir /Q /S node_modules
echo deleted node_modules

echo cleaned
