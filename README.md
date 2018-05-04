# ionic-note-app
Dependencies used :

1. firebase ---> $ npm install --save firebase


--TASK--

Create a application similar to the "Notes" application you have on your phone.
Requirements -
1. User should be able to login to the application using google/facebook.
2. User should be able to create notes and save them.
3. User should be able to see a list of notes he created and be able to edit them.
4. User should be able to delete notes.

The database field storing notes should be of type TEXT.

1. Frotnend
a. Base your application off this boilerplate - https://github.com/marcoturi/ionic-boilerplate
b. This should have 4 screens
- login
- list of notes
- create/edit a note
- profile page - should show users name and email recieved from nd.google/facebook
- you should be able to authenticate this user via facebook and call the backend with the token and the users details and save them, hence creating/finding the user on the backend.

2. Backend
a. Base your application off this boilerplate - https://github.com/guilouro/django-template
b. The backend should
- be able to create/find a user
- be able to create/find notes for a user
- be able to authenticate a request, i.e all requests should have authentication information in their Header

*Bonus points if you can provide an alternative login on the frontend for the django admin users.

Create this solution in a git repo in the following manner:
i) Create a new repo and check in a README with the requirements of the problem as stated above
ii) Then for your incremental changes as you develop, bunch related things into a commit only. For example, 20 small commits showing different parts of the application would be much better than one huge commit having everything.
