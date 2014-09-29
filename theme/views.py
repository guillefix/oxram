from __future__ import absolute_import, unicode_literals
from future.builtins import int, open

import os
from mezzanine.utils.models import get_model

try:
    from urllib.parse import urljoin, urlparse
except ImportError:
    from urlparse import urljoin, urlparse

from django.contrib import admin
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.admin.options import ModelAdmin
from django.contrib.staticfiles import finders
from django.core.exceptions import PermissionDenied
from django.core.urlresolvers import reverse
from django.http import (HttpResponse, HttpResponseServerError,
                         HttpResponseNotFound)
from django.shortcuts import redirect
from django.template import RequestContext
from django.template.loader import get_template
from django.utils.translation import ugettext_lazy as _
from django.views.decorators.csrf import requires_csrf_token

from mezzanine.conf import settings
from mezzanine.core.forms import get_edit_form
from mezzanine.core.models import Displayable, SitePermission
from mezzanine.utils.cache import add_cache_bypass
from mezzanine.utils.views import is_editable, paginate, render, set_cookie
from mezzanine.utils.sites import has_site_permission
from mezzanine.utils.urls import next_url


def IndexView(request, template, extra_context=None, **kwargs):
    """
    Replacement for Django's ``direct_to_template`` that uses
    ``TemplateResponse`` via ``mezzanine.utils.views.render``.
    """
    context = extra_context or {}
    context["params"] = kwargs
    context["inIndex"] = True
    for (key, value) in context.items():
        if callable(value):
            context[key] = value()
    return render(request, template, context)
