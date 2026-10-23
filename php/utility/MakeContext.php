<?php
declare(strict_types=1);

// CrackedApiReference SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CrackedApiReferenceMakeContext
{
    public static function call(array $ctxmap, ?CrackedApiReferenceContext $basectx): CrackedApiReferenceContext
    {
        return new CrackedApiReferenceContext($ctxmap, $basectx);
    }
}
