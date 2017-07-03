# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import webapp2
import jinja2
import os

PROJECT_DIR = os.path.dirname(__file__)
TEMPLATE_DIR = os.path.join(PROJECT_DIR, "templates")

JINJA_ENVIRONMENT = jinja2.Environment(
	loader=jinja2.FileSystemLoader(TEMPLATE_DIR),
	extensions=["jinja2.ext.autoescape"],
	autoescape=True)

class HomePage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template("home.html")
        self.response.write(template.render())

class ProjectPage(webapp2.RequestHandler):
	def post(self, name):
		if self.request.get('pw') == 'emilyport':
			try:
				template = JINJA_ENVIRONMENT.get_template(name + ".html")
				self.response.write(template.render())
			except jinja2.TemplateNotFound:
				self.response.write("Not Found!!! :(:(:(")
				self.response.set_status(404)
		else:
			self.response.write("""
				<form method="post">
					<input type="password" name="pw"/>
					<input type="submit" value="Login"/>
				</form>
				""")

	def get(self, name):
		self.response.write("""
				<form method="post">
					<input type="password" name="pw"/>
					<input type="submit" value="Login"/>
				</form>
				""")

app = webapp2.WSGIApplication([
    webapp2.Route('/', handler=HomePage), 
    webapp2.Route('/project/<name>', handler=ProjectPage),
], debug=True)