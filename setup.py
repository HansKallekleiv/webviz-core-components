import os
import json
from setuptools import setup


with open('README.md', 'r') as fh:
    long_description = fh.read()

with open(os.path.join('webviz_core_components', 'package-info.json')) as f:
    package = json.load(f)

package_name = package['name'].replace(' ', '_').replace('-', '_')

install_requires = [
    'dash~=1.1'
]

tests_require = [
    'chromedriver-binary>=74.0.3729.6.0',
    'ipdb',
    'percy',
    'selenium',
    'flake8',
    'pylint'
]

# 'dash[testing]' to be added in tests_require when
# https://github.com/pypa/pip/issues/4957 is closed.

setup(
    name=package_name,
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package['description'],
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/equinor/webviz-core-components',
    install_requires=install_requires,
    tests_require=tests_require,
    extras_require={
        'tests': tests_require,
        'dependencies': install_requires
    },
    setup_requires=['setuptools_scm~=3.2'],
    use_scm_version=True,
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Natural Language :: English',
        'Topic :: Multimedia :: Graphics',
        'Topic :: Scientific/Engineering',
        'Topic :: Scientific/Engineering :: Visualization',
        'License :: OSI Approved :: '\
        'GNU Lesser General Public License v3 (LGPLv3)'
    ]
)
