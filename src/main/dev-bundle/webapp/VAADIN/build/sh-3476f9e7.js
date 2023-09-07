function r(n,o){for(var e=0;e<o.length;e++){const t=o[e];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in n)){const p=Object.getOwnPropertyDescriptor(t,s);p&&Object.defineProperty(n,s,p.get?p:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i={},a={get exports(){return i},set exports(n){i=n}};(function(n,o){ace.define("ace/snippets/sh.snippets",["require","exports","module"],function(e,t,s){s.exports=`# Shebang. Executing bash via /usr/bin/env makes scripts more portable.
snippet #!
	#!/usr/bin/env bash
	
snippet if
	if [[ \${1:condition} ]]; then
		\${2:#statements}
	fi
snippet elif
	elif [[ \${1:condition} ]]; then
		\${2:#statements}
snippet for
	for (( \${2:i} = 0; $2 < \${1:count}; $2++ )); do
		\${3:#statements}
	done
snippet fori
	for \${1:needle} in \${2:haystack} ; do
		\${3:#statements}
	done
snippet wh
	while [[ \${1:condition} ]]; do
		\${2:#statements}
	done
snippet until
	until [[ \${1:condition} ]]; do
		\${2:#statements}
	done
snippet case
	case \${1:word} in
		\${2:pattern})
			\${3};;
	esac
snippet go 
	while getopts '\${1:o}' \${2:opts} 
	do 
		case $$2 in
		\${3:o0})
			\${4:#staments};;
		esac
	done
# Set SCRIPT_DIR variable to directory script is located.
snippet sdir
	SCRIPT_DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" && pwd )"
# getopt
snippet getopt
	__ScriptVersion="\${1:version}"

	#===  FUNCTION  ================================================================
	#         NAME:  usage
	#  DESCRIPTION:  Display usage information.
	#===============================================================================
	function usage ()
	{
			cat <<- EOT

	  Usage :  $\${0:0} [options] [--] 

	  Options: 
	  -h|help       Display this message
	  -v|version    Display script version

	EOT
	}    # ----------  end of function usage  ----------

	#-----------------------------------------------------------------------
	#  Handle command line arguments
	#-----------------------------------------------------------------------

	while getopts ":hv" opt
	do
	  case $opt in

		h|help     )  usage; exit 0   ;;

		v|version  )  echo "$\${0:0} -- Version $__ScriptVersion"; exit 0   ;;

		\\? )  echo -e "\\n  Option does not exist : $OPTARG\\n"
			  usage; exit 1   ;;

	  esac    # --- end of case ---
	done
	shift $(($OPTIND-1))

`}),ace.define("ace/snippets/sh",["require","exports","module","ace/snippets/sh.snippets"],function(e,t,s){t.snippetText=e("./sh.snippets"),t.scope="sh"}),function(){ace.require(["ace/snippets/sh"],function(e){n&&(n.exports=e)})}()})(a);const c=i,$=r({__proto__:null,default:c},[i]);export{$ as s};
