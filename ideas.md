# How i approached this problem?

* I take text through body of request and source and target language through query.
* first i search that text in my database whether it is present or not if not then translate it and send the response as i also need to store it and also store in different language to achieve pre caching schema of my table contains five thing s.no and text(that  we are passing) source language and targeted language and translatedLanguage. 
* Searching is based on text source and target before hitting the third party service
* I'm here storing the text which user want to translate and then also i store the translation of the text in kannada,hindi,tamil,telgu.

# Improvement
- I can use indexing for searching from the database.
- for smart caching there must be some algorithm which tells that what is to be expected languages if user is translating a text into kannada then it will tell the expected language would be hindi tamil and telgu etc.