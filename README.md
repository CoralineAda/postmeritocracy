# The Post-Meritocracy Manifesto
A project to communicate the values and principals of software developers in the post-meritocracy world.

## Contributing
Be sure to read the Code of Conduct before submitting a pull request, opening an issue, or otherwise engaging with this community.

## Adding your name as a signatory
Please use the Google Form linked on the bottom of the page at https://postmeritocracy.org. Do not open a PR to add your name.

## Adding a translation
* Fork the repo
* Make sure that you have Hugo installed:
	* On macOS: `brew install hugo`
	* On most Linux distros: `snap install hugo`
	* See [here](https://gohugo.io/getting-started/installing/) for more options

* Create an empty markdown file called `_index.<COUNTRY_CODE>.md` in the `content` directory
* Write your translation there. Be sure to copy the structure of the English version at `index.md`, including all the special codes.
* Add an entry to `config.toml` with your language information under the [Languages] tag. Please use the language codes defined by ISO 639-1: http://www.loc.gov/standards/iso639-2/php/code_list.php. For example, for Swedish, you would enter:

      [Languages.se]
      languageName = "Swedish"
      languageCode = "se"

* Start the hugo server: `hugo server -D`
* Navigate to http://localhost:1313/LANGUAGE_CODE/ and you should see your translation
* Open a pull request
* I will find another native speaker to look over the translation you made, and then it will be merged!
