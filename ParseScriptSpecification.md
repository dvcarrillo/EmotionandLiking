For each participant, there will be a csv with data recording the whole study process.
We would like to have a collective csv, where each row describes the most important data for each participant. So each row will consist of every answer made to each stimuli.
This document describes how to get the data, and where it should be placed or calculated.
For reference, see example database.csv and exampleuserstudy.csv
## Personal ID
Get: Either use open-data:s numbers, or just make up one here.\
Set: As is.
## Rating_order
Get: N/a, as each participant will get the same order\
Set: N/a
## Task_order
Get: Check in the ‘file’ type. If the first one is from visual, then you know visual came before audio\
Set: ‘Visual/Audio’ or ‘Audio/Visual’
## Block_order
Get: Same deal, keep track of which blocks come in which order.\
Set: String of letters
## Task
Get: Check if visual or audio, based on filename in ‘file’\
Set: ‘Visual’ or ‘Audio’
## Block
Get: Check what letter is in ‘file’\
Set: Single letter
## Stimulus
Get: Check what number is in ‘file’\
Set: Single or double digit
## Liking
Get: Value from ‘response’, where the ‘response_action’ is ‘click #like-X’\
Set: Value from ‘response’
## Valence
Get: Value from ‘response’, where the ‘response_action’ is ‘click #valence-X’\
Set: Value from ‘response’
## Arousal
Get: Value from ‘response’, where the ‘response_action’ is ‘click #arousal-X’\
Set: Value from ‘response’
## Response Time
Get: Value from time_render and time_end\
Set: time_render – time_end (need to double check this, could also be that we need to take length of sound in mind also)
## Repetitions
Get: Each of the values from the ‘repeatTimes’ column (only matters for audio)\
Set: Either sum of each 3 ratings for one stimulus, or each separate
## NFC_1 to NFC_18
Get: When the form starts, each row till have the question, with the answer in ‘response’ from 1-9\
Set: Value from -4 to 4 (translated from 1-9)
## Total_NFC
Get: Check with Ana\
Set: From earlier values, I assume
## NFE_1 to NFE_18
Get: When the form starts, each row till have the question, with the answer in ‘response’ from 1-5\
Set: Value from -2 to 2 (translated from 1-5)
## Total_NFE
Get: Check with Ana\
Set: From earlier values, I assume
## Age, Gender, Education, Musical_edu, Art_edu
Get: Each is from the last row, in columns ‘age’, ‘gender’, ‘education’, ‘musical_edu’ and ‘art_edu’\
Set: As is
