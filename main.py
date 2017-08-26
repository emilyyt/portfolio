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

PASSWORD_TEMPLATE_NAME = 'password-form'

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(TEMPLATE_DIR),
    extensions=["jinja2.ext.autoescape"],
    autoescape=True)

class HomePage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template("home.html")
        self.response.write(template.render())


class ProjectPage(webapp2.RequestHandler):

    def render_template(self, template_name):
        try:
            template = JINJA_ENVIRONMENT.get_template(template_name + ".html")
            self.response.write(template.render())
        except jinja2.TemplateNotFound:
            self.response.write("Page not found")
            self.response.set_status(404)       

    def post(self, project):
        if self.request.get('pw') == 'emilyport':
            # Set cookie on response
            self.response.set_cookie( "portfolioAccess", "valid", max_age=1200, path="/")
            self.render_template(project)
        else:
            self.render_template(PASSWORD_TEMPLATE_NAME)

    def get(self, project):
        # If they have the cookie you previously set and its the right value,
        # render project page instead of password form
        if self.request.cookies.get("portfolioAccess") == "valid":
            self.render_template(project)
        else:
            self.render_template(PASSWORD_TEMPLATE_NAME)

app = webapp2.WSGIApplication([
    webapp2.Route('/', handler=HomePage), 
    webapp2.Route('/project/<project>', handler=ProjectPage)
], debug=True)
