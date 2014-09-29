from django import template

register = template.Library()

@register.simple_tag
def img_width():
    return int((394/371)*60)
