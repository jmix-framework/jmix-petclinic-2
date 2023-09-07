function a(t,s){for(var e=0;e<s.length;e++){const n=s[e];if(typeof n!="string"&&!Array.isArray(n)){for(const p in n)if(p!=="default"&&!(p in t)){const $=Object.getOwnPropertyDescriptor(n,p);$&&Object.defineProperty(t,p,$.get?$:{enumerable:!0,get:()=>n[p]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},r={get exports(){return i},set exports(t){i=t}};(function(t,s){ace.define("ace/snippets/haskell.snippets",["require","exports","module"],function(e,n,p){p.exports=`snippet lang
	{-# LANGUAGE \${1:OverloadedStrings} #-}
snippet info
	-- |
	-- Module      :  \${1:Module.Namespace}
	-- Copyright   :  \${2:Author} \${3:2011-2012}
	-- License     :  \${4:BSD3}
	--
	-- Maintainer  :  \${5:email@something.com}
	-- Stability   :  \${6:experimental}
	-- Portability :  \${7:unknown}
	--
	-- \${8:Description}
	--
snippet import
	import           \${1:Data.Text}
snippet import2
	import           \${1:Data.Text} (\${2:head})
snippet importq
	import qualified \${1:Data.Text} as \${2:T}
snippet inst
	instance \${1:Monoid} \${2:Type} where
		\${3}
snippet type
	type \${1:Type} = \${2:Type}
snippet data
	data \${1:Type} = \${2:$1} \${3:Int}
snippet newtype
	newtype \${1:Type} = \${2:$1} \${3:Int}
snippet class
	class \${1:Class} a where
		\${2}
snippet module
	module \`substitute(substitute(expand('%:r'), '[/\\\\]','.','g'),'^\\%(\\l*\\.\\)\\?','','')\` (
	)	where
	\`expand('%') =~ 'Main' ? "\\n\\nmain = do\\n  print \\"hello world\\"" : ""\`

snippet const
	\${1:name} :: \${2:a}
	$1 = \${3:undefined}
snippet fn
	\${1:fn} :: \${2:a} -> \${3:a}
	$1 \${4} = \${5:undefined}
snippet fn2
	\${1:fn} :: \${2:a} -> \${3:a} -> \${4:a}
	$1 \${5} = \${6:undefined}
snippet ap
	\${1:map} \${2:fn} \${3:list}
snippet do
	do
		
snippet λ
	\\\${1:x} -> \${2}
snippet \\
	\\\${1:x} -> \${2}
snippet <-
	\${1:a} <- \${2:m a}
snippet ←
	\${1:a} <- \${2:m a}
snippet ->
	\${1:m a} -> \${2:a}
snippet →
	\${1:m a} -> \${2:a}
snippet tup
	(\${1:a}, \${2:b})
snippet tup2
	(\${1:a}, \${2:b}, \${3:c})
snippet tup3
	(\${1:a}, \${2:b}, \${3:c}, \${4:d})
snippet rec
	\${1:Record} { \${2:recFieldA} = \${3:undefined}
				, \${4:recFieldB} = \${5:undefined}
				}
snippet case
	case \${1:something} of
		\${2} -> \${3}
snippet let
	let \${1} = \${2}
	in \${3}
snippet where
	where
		\${1:fn} = \${2:undefined}
`}),ace.define("ace/snippets/haskell",["require","exports","module","ace/snippets/haskell.snippets"],function(e,n,p){n.snippetText=e("./haskell.snippets"),n.scope="haskell"}),function(){ace.require(["ace/snippets/haskell"],function(e){t&&(t.exports=e)})}()})(r);const o=i,l=a({__proto__:null,default:o},[i]);export{l as h};
